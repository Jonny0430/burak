import { MemberInput } from "../libs/types/member";

class MemberService {
    constructor() {}

    public async processSignup(input: MemberInput): Promise<string> {
        console.log("Passed here!");
        return "DONE";
    }
}

export default MemberService;