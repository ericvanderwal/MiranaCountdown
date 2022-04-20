/*!
 *  Epochtimer.js
 *  Fetches time until target epoch from ckbexplorer api.
 *
 *  This timer is not integrated with this template directly,
 *  To get the epoch end date and input it into the timer,
 *  1. Uncomment this script in index.html
 *  2. Copy the result date from epochtimer.js in the console
 *  3. Paste the result in main.js, line 112, as the new date object
 *     var date = new Date(result)
 *
 *
 */
const estimate = async () => {
  const {
    data: {
      attributes: {
        epoch_info: { epoch_number, epoch_length, index },
      },
    },
  } = await fetch("https://api.explorer.nervos.org/api/v1/statistics", {
    headers: {
      "content-type": "application/vnd.api+json",
      accept: "application/vnd.api+json",
    },
  }).then((res) => res.json());

  const HOURS_PER_EPOCH = 4;
  const targetEpoch = 5414;

  const hs =
    (targetEpoch - (+epoch_number + +index / +epoch_length)) * HOURS_PER_EPOCH;
  const days = Math.floor(hs / 24);
  const hours = Math.trunc(hs - days * 24);
  const nontrunmin = ((hs - days * 24) % 1) * 60;
  const mins = Math.trunc(((hs - days * 24) % 1) * 60);
  const secs = Math.trunc((nontrunmin % 1) * 60);

  // add epoch timer values to current time to get time of Epoch 5414
  var date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(date.getHours() + hours);
  date.setMinutes(date.getMinutes() + mins);
  date.setSeconds(date.getSeconds() + secs);

  return { date };
};

estimate().then(console.log);
