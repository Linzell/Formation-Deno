/**
 * subprocess_piping_to_file.ts
 */

 import {
  readableStreamFromReader,
  writableStreamFromWriter,
} from "https://deno.land/std@0.140.0/streams/conversion.ts";
import { mergeReadableStreams } from "https://deno.land/std@0.140.0/streams/merge.ts";

// create the file to attach the process to
const file = await Deno.open("./process_output.txt", {
  read: true,
  write: true,
  create: true,
});
const fileWriter = await writableStreamFromWriter(file);

// start the process
const process = Deno.run({
  cmd: ["yes"],
  stdout: "piped",
  stderr: "piped",
});

// example of combining stdout and stderr while sending to a file
const stdout = readableStreamFromReader(process.stdout);
const stderr = readableStreamFromReader(process.stderr);
const joined = mergeReadableStreams(stdout, stderr);
// returns a promise that resolves when the process is killed/closed
joined.pipeTo(fileWriter).then(() => console.log("pipe join done"));

// manually stop process "yes" will never end on its own
setTimeout(async () => {
  process.kill("SIGINT");
}, 100);