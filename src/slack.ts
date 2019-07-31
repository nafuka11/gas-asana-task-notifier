import { AsanaTask } from "./asana";

/**
 * Slackにtaskを投稿する
 *
 * @export
 * @param {AsanaTask[]} tasks
 * @param {string} slackUrl Slack Incoming Webhook URL
 */
export function postMessage(tasks: AsanaTask[], slackUrl: string) {
  if (tasks.length <= 0) {
    return;
  }
  const blocks: AsanaTask[] = createMessageBlocks(tasks);
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ blocks: blocks })
  };
  const response = UrlFetchApp.fetch(slackUrl, options);
  Logger.log(response);
}

/**
 * taskリストからSlackのメッセージ用blockを作成
 *
 * @param {AsanaTask[]} tasks
 * @returns {any[]} blocks
 */
function createMessageBlocks(tasks: AsanaTask[]): any[] {
  const blocks = [];
  // header
  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: `You completed *${tasks.length}* tasks! Congratulations!`
    }
  });
  blocks.push({
    type: "divider"
  });
  // tasks
  tasks.forEach(task => {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:white_flower: *${task.name}*`
      }
    });
    blocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: Utilities.formatDate(
            task.completedAt,
            "JST",
            "YYYY-MM-dd(E) HH:mm:ss"
          )
        }
      ]
    });
  });
  return blocks;
}
