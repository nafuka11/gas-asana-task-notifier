import { fetchCompletedTasks } from "./asana";
import { postMessage } from "./slack";

const PREV_EXEC_TIME = "PREV_EXEC_TIME";

function main() {
  const nowExecTime = new Date();

  const properties = PropertiesService.getScriptProperties();
  // PREV_EXEC_TIMEが存在しない場合、UNIXエポック
  const prevExecTime: Date = new Date(properties.getProperty(PREV_EXEC_TIME));
  const slackUrl: string = properties.getProperty("SLACK_URL");
  const asanaAccessToken: string = properties.getProperty("ASANA_ACCESS_TOKEN");
  const asanaProjectGid: string = properties.getProperty("ASANA_PROJECT_ID");

  const tasks = fetchCompletedTasks(
    prevExecTime,
    asanaAccessToken,
    asanaProjectGid
  );
  Logger.log(tasks);

  postMessage(tasks, slackUrl);

  properties.setProperty(PREV_EXEC_TIME, nowExecTime.toISOString());
}
