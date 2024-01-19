export default function (name: string) {
    const url = new URL(`../assets/${name}`, import.meta.url).href;
    return url;
}
