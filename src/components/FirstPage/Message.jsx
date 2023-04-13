import React from "react";
import Typewriter from "typewriter-effect";

const Message = ({ name }) => {
  return (
    <div className="font-ekusheySaraswatii text-xl md:text-2xl bg-pink-500/30 md:w-1/2 mx-auto p-2 mt-4">
      <Typewriter
        options={{
          strings: [
            `প্রিয় <span class="font-dancing">${name}</span>, <br />
          সাদিয়া রহমান মুন এর সহিত জড়িয়ে পড়ছি আমি বিয়ের গ্রন্থিতে।
          <br />
          আসছে ২৮ই এপ্রিল শুক্রবার দুপুর থেকে সন্ধ্যা।
          <br />
          গোপালগঞ্জ জেলার কাশিয়ানি উপজেলায় অনুষ্ঠিত হবে সেই অনুষ্ঠান।
          <br />
          তুমি আসবেই, আনন্দ খুশির কল্লোল তুলবেই।
          <br />
          অনুরোধ নয়, অধিকার।
          <br />
          ইতি,
          <br />
          নাহিদুজ্জামান হৃদয়`,
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Message;
