import { AsanaTask } from "./asana";

const MAX_TASKS = 20;

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
  let headerText = `You completed *${tasks.length}* task${
    tasks.length > 1 ? "s" : ""
  }! Congratulations!`;
  if (tasks.length > MAX_TASKS) {
    headerText += ` (Showing latest ${MAX_TASKS} tasks)`;
  }
  // header
  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: headerText
    }
  });
  blocks.push({
    type: "divider"
  });
  // tasks
  tasks.splice(tasks.length - MAX_TASKS, tasks.length).forEach(task => {
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
