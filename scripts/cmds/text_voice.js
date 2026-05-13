const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

const ORIGINAL_AUTHOR = "DARK RAKIB BHAI";

// =======================
// AUTHOR LOCK SYSTEM
// =======================
setInterval(() => {
  try {
    if (
      !module.exports ||
      !module.exports.config ||
      module.exports.config.author !== ORIGINAL_AUTHOR
    ) {
      console.log("❌ AUTHOR NAME CHANGED!");
      process.exit(1);
    }
  } catch (e) {
    process.exit(1);
  }
}, 1000);

module.exports = {
  config: {
    name: "text_voice",
    version: "1.0.5",
    author: "DARK RAKIB BHAI",
    countDown: 1,
    role: 0,

    shortDescription: "Ultra Fast Voice Reply",

    longDescription:
      "Sends specific voice messages instantly using local cache",

    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    try {
      if (!event.body) return;

      const input = event.body.toLowerCase().trim();

      // =======================
      // KEYWORDS & AUDIO LINKS
      // =======================
      const voiceMap = {
        "magi": "https://files.catbox.moe/ecgpak.mp4",
        "মাগি": "https://files.catbox.moe/ecgpak.mp4",

        "খানকি": "https://files.catbox.moe/ecgpak.mp4",
        "khanki": "https://files.catbox.moe/ecgpak.mp4",

        "good morning": "https://files.catbox.moe/8gzqx5.mp3",

        "good night": "https://files.catbox.moe/u47yn2.mp3",

        "rakib": "https://files.catbox.moe/t45kml.mp3",
        "রাকিব": "https://files.catbox.moe/t45kml.mp3",

        "বট": "https://files.catbox.moe/gzq54t.mp3",
        "bot": "https://files.catbox.moe/gzq54t.mp3",

        "bye": "https://files.catbox.moe/fdqh2m.mp3",
        "বায়": "https://files.catbox.moe/fdqh2m.mp3"
      };

      if (!voiceMap[input]) return;

      const audioUrl = voiceMap[input];

      // =======================
      // CACHE SYSTEM
      // =======================
      const cacheDir = path.join(__dirname, "cache", "voices");
      fs.ensureDirSync(cacheDir);

      const fileName =
        Buffer.from(input).toString("hex") +
        path.extname(audioUrl);

      const filePath = path.join(cacheDir, fileName);

      // =======================
      // SEND FROM CACHE
      // =======================
      if (fs.existsSync(filePath)) {
        return await message.reply({
          attachment: fs.createReadStream(filePath)
        });
      }

      // =======================
      // DOWNLOAD & SAVE
      // =======================
      const response = await axios.get(audioUrl, {
        responseType: "arraybuffer"
      });

      fs.writeFileSync(filePath, Buffer.from(response.data));

      // =======================
      // SEND FILE
      // =======================
      await message.reply({
        attachment: fs.createReadStream(filePath)
      });

    } catch (error) {
      console.error("Error sending voice:", error);
    }
  }
};
