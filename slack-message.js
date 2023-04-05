const core = require("@actions/core");
const { WebClient } = require("@slack/web-api");

async function sendSlackMessage(message) {
  try {
    const slackBotToken = core.getInput("slack-bot-token");
    const web = new WebClient(slackBotToken);
    await web.chat.postMessage({
      text: message,
      channel: "#general",
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  sendSlackMessage,
};
