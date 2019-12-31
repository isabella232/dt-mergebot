import { getPRInfo } from "./pr-info";
import * as computeActions from "./compute-pr-actions";

async function main() {
    const num = +process.argv[2];
    const info = await getPRInfo(num);
    console.log(``);
    console.log(`=== Raw PR Info ===`);
    console.log(JSON.stringify(info, undefined, 2));

    if (info.type === "fail") {
        return;
    }

    const actions = computeActions.process(info);
    console.log(``);
    console.log(`=== Actions ===`);
    console.log(JSON.stringify(actions, undefined, 2));
}

main().then(() => {
    process.exit(0);
});
