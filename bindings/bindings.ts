// Auto-generated with deno_bindgen
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v;
  return new TextEncoder().encode(v);
}

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v);
}

// deno-lint-ignore no-explicit-any
function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v);
  const lengthBe = new Uint8Array(4);
  const view = new DataView(lengthBe.buffer);
  ptr.copyInto(lengthBe, 0);
  const buf = new Uint8Array(view.getUint32(0));
  ptr.copyInto(buf, 4);
  return buf;
}

const url = new URL("../target/debug", import.meta.url);

let uri = url.pathname;
if (!uri.endsWith("/")) uri += "/";

// https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya#parameters
if (Deno.build.os === "windows") {
  uri = uri.replace(/\//g, "\\");
  // Remove leading slash
  if (uri.startsWith("\\")) {
    uri = uri.slice(1);
  }
}

const { symbols } = Deno.dlopen(
  {
    darwin: uri + "libgreeter.dylib",
    windows: uri + "greeter.dll",
    linux: uri + "libgreeter.so",
    freebsd: uri + "libgreeter.so",
    netbsd: uri + "libgreeter.so",
    aix: uri + "libgreeter.so",
    solaris: uri + "libgreeter.so",
    illumos: uri + "libgreeter.so",
  }[Deno.build.os],
  {
    greeter: {
      parameters: ["buffer", "usize"],
      result: "void",
      nonblocking: false,
    },
  }
);

export function greeter(name: string) {
  const a0_buf = encode(name);

  const rawResult = symbols.greeter(a0_buf, a0_buf.byteLength);
  const result = rawResult;
  return result;
}
