import { AsanaTask } from "../src/asana";

export const createTasks = (len: number): AsanaTask[] => {
  return Array(len)
    .fill(0)
    .map((v, i) => {
      return { name: `task${i + 1}`, completedAt: new Date(i + 1) };
    });
};

export const expectedPayload = {
  1: {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "You completed *1* task! Congratulations!"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task1*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      }
    ]
  },
  19: {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "You completed *19* tasks! Congratulations!"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task1*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task2*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task3*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task4*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task5*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task6*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task7*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task8*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task9*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },

      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task10*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task11*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task12*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task13*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task14*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task15*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task16*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task17*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task18*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task19*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      }
    ]
  },
  20: {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "You completed *20* tasks! Congratulations!"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task1*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task2*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task3*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task4*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task5*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task6*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task7*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task8*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task9*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },

      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task10*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task11*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task12*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task13*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task14*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task15*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task16*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task17*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task18*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task19*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task20*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      }
    ]
  },
  21: {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "You completed *21* tasks! Congratulations! (Showing latest 20 tasks)"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task2*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task3*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task4*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task5*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task6*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task7*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task8*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task9*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },

      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task10*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task11*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task12*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task13*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task14*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task15*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task16*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task17*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task18*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task19*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task20*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: ":white_flower: *task21*" }
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: "" }]
      }
    ]
  }
};
