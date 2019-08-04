const ENDPOINT_URL = "https://app.asana.com/api/1.0/tasks";

export interface AsanaTask {
  name: string;
  completedAt: Date;
}

/**
 *　指定プロジェクトの完了済みtaskを取得する
 *
 * @export
 * @param {Date} completedFrom 完了開始時間
 * @param {string} accessToken Asanaのアクセストークン
 * @param {string} projectGid プロジェクトGID
 * @returns {AsanaTask[]} completedFrom以降に完了したtaskリスト
 */
export function fetchCompletedTasks(
  completedFrom: Date,
  accessToken: string,
  projectGid: string
): AsanaTask[] {
  const timeString: string = completedFrom.toISOString();

  const url: string =
    ENDPOINT_URL +
    `?project=${projectGid}` +
    `&completed_since=${timeString}` +
    "&opt_fields=id,name,completed,completed_at";
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: "get",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  const response: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(
    url,
    options
  );
  const tasks: AsanaTask[] = JSON.parse(response.getContentText())
    .data.filter(task => task.completed === true)
    .sort((a, b) => a.completed_at.localeCompare(b.completed_at))
    .map(value => ({
      name: value.name,
      completedAt: new Date(value.completed_at)
    }));
  return tasks;
}
