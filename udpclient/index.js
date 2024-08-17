import { parseArgs } from "util";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    hostname: {
      type: 'string',
    },
    port: {
      type: 'string',
    },
  },
  strict: true,
  allowPositionals: true,
});

const client = await Bun.udpSocket({
    connect: {
        hostname: values.hostname,
        port: parseInt(values.port),
    }
});
client.send("hello im client\n");
client.close();
