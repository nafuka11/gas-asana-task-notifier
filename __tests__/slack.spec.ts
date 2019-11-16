import { postMessage } from "../src/slack";
import { createTasks, expectedPayload } from "../__fixtures__/slack";

function mockUrlFetchAppFetch(json): jest.Mock {
  return (UrlFetchApp.fetch = jest.fn(
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
  ));
}

function mockUtilitiesFormatDate(): jest.Mock {
  return (Utilities.formatDate = jest.fn(
    (date: Date, timeZone: String, format: string): string => {
      return "";
    }
  ));
}

Logger.log = jest.fn();

describe("postMessage", () => {
  it("Asanaタスクが0個の時、タスクを送信しないこと", () => {
    const mock = mockUrlFetchAppFetch([]);
    const tasks = [];
    postMessage(tasks, "http://example.com");
    expect(mock).not.toHaveBeenCalled();
  });

  it("Asanaタスクが1個の時、1個のタスクを送信すること", () => {
    const fetchMock = mockUrlFetchAppFetch([]);
    const formatDateMock = mockUtilitiesFormatDate();
    const task = createTasks(1);
    postMessage(task, "http://example.com");
    const payload = expectedPayload[1];
    const expected = JSON.stringify(payload);
    const actualPayload = fetchMock.mock.calls[0][1].payload;
    expect(actualPayload).toBe(expected);
  });

  it("Asanaタスクが19個の時、19個のタスクを送信すること", () => {
    const fetchMock = mockUrlFetchAppFetch([]);
    const formatDateMock = mockUtilitiesFormatDate();
    const tasks = createTasks(19);
    postMessage(tasks, "http://example.com");
    const payload = expectedPayload[19];
    const expected = JSON.stringify(payload);
    const actualPayload = fetchMock.mock.calls[0][1].payload;
    expect(actualPayload).toBe(expected);
  });

  it("Asanaタスクが20個の時、20個のタスクを送信すること", () => {
    const fetchMock = mockUrlFetchAppFetch([]);
    const formatDateMock = mockUtilitiesFormatDate();
    const tasks = createTasks(20);
    postMessage(tasks, "http://example.com");
    const payload = expectedPayload[20];
    const expected = JSON.stringify(payload);
    const actualPayload = fetchMock.mock.calls[0][1].payload;
    expect(actualPayload).toBe(expected);
  });

  it("Asanaタスクが21個の時、最新20個のタスクを送信すること", () => {
    const fetchMock = mockUrlFetchAppFetch([]);
    const formatDateMock = mockUtilitiesFormatDate();
    const tasks = createTasks(21);
    postMessage(tasks, "http://example.com");
    const payload = expectedPayload[21];
    const expected = JSON.stringify(payload);
    const actualPayload = fetchMock.mock.calls[0][1].payload;
    expect(actualPayload).toBe(expected);
  });
});
