import { chain } from "@/src/middlewares/chain";
import { withI18n } from "@/src/middlewares/withI18n";

const middlewares = [withI18n];

export default chain(middlewares);

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(es|pt|en)/:path*"],
};
