import { fetchCompletedTasks, AsanaTask } from "../src/asana";

function mockUrlFetchAppFetch(json): void {
  UrlFetchApp.fetch = jest.fn(
    (
      url: string,
      params?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions
    ): GoogleAppsScript.URL_Fetch.HTTPResponse => {
      return {
        getContentText: jest.fn((): string => JSON.stringify(json)),
        getAllHeaders: () => fail(),
        getAs: () => fail(),
        getBlob: () => fail(),
        getContent: () => fail(),
        getHeaders: () => fail(),
        getResponseCode: () => fail()
      };
    }
  );
}

describe("fetchCompletedTasks()", () => {
  it("UrlFetchApp.fetch()の引数確認", () => {
    mockUrlFetchAppFetch({ data: [] });

    fetchCompletedTasks(
      // Date.UTCのmonthは0-11
      new Date(Date.UTC(2019, 0, 23, 4, 56, 7, 890)),
      "9/abcdefghijklmnopqrstuvwxyz012345",
      "1234567890"
    );

    const expectedUrl: string =
      "https://app.asana.com/api/1.0/tasks" +
      "?project=1234567890" +
      "&completed_since=2019-01-23T04:56:07.890Z" +
      "&opt_fields=id,name,completed,completed_at";
    const expectedParams: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: { Authorization: "Bearer 9/abcdefghijklmnopqrstuvwxyz012345" },
      method: "get"
    };

    expect(UrlFetchApp.fetch).toHaveBeenCalledWith(expectedUrl, expectedParams);
  });

  it("完了したタスクのみ返すか確認", () => {
    const json = {
      data: [
        {
          gid: 1,
          name: "task1",
          completed: true,
          completed_at: new Date(Date.UTC(2019, 0, 1, 1, 1, 1, 1)).toISOString()
        },
        {
          gid: 2,
          name: "task2",
          completed: false,
          completed_at: new Date(Date.UTC(2020, 1, 2, 2, 2, 2, 2)).toISOString()
        },
        {
          gid: 3,
          name: "task3",
          completed: true,
          completed_at: new Date(Date.UTC(2021, 2, 3, 3, 3, 3, 3)).toISOString()
        }
      ]
    };
    mockUrlFetchAppFetch(json);

    const tasks = fetchCompletedTasks(new Date(0), "accessToken", "projectGid");
    const expectedTasks: AsanaTask[] = [
      {
        name: "task1",
        completedAt: new Date(Date.UTC(2019, 0, 1, 1, 1, 1, 1))
      },
      {
        name: "task3",
        completedAt: new Date(Date.UTC(2021, 2, 3, 3, 3, 3, 3))
      }
    ];

    expect(tasks).toMatchObject(expectedTasks);
  });

  it("タスクがcompleted_atで昇順ソートされるか確認", () => {
    const json = {
      data: [
        {
          gid: 1,
          name: "task1",
          completed: true,
          completed_at: new Date(Date.UTC(2020, 1, 2, 2, 2, 2, 2)).toISOString()
        },
        {
          gid: 2,
          name: "task2",
          completed: true,
          completed_at: new Date(Date.UTC(2021, 2, 3, 3, 3, 3, 3)).toISOString()
        },
        {
          gid: 3,
          name: "task3",
          completed: true,
          completed_at: new Date(Date.UTC(2019, 0, 1, 1, 1, 1, 1)).toISOString()
        }
      ]
    };
    mockUrlFetchAppFetch(json);

    const tasks = fetchCompletedTasks(new Date(0), "accessToken", "projectGid");
    const expectedTasks: AsanaTask[] = [
      {
        name: "task3",
        completedAt: new Date(Date.UTC(2019, 0, 1, 1, 1, 1, 1))
      },
      {
        name: "task1",
        completedAt: new Date(Date.UTC(2020, 1, 2, 2, 2, 2, 2))
      },
      {
        name: "task2",
        completedAt: new Date(Date.UTC(2021, 2, 3, 3, 3, 3, 3))
      }
    ];

    expect(tasks).toMatchObject(expectedTasks);
  });
});
