
export const routes = {
    default: '/',
    teams: '/teams',
    teamMembers: '/team/members:teamId',
    dashboard: "/dashboard",
    report: '/report:memberId:sheetId/*',
    clockIn: '/clock/in',
    manageMembers: '/manage/members',
    signIn: '/sign/in',
    register: '/register',
    administrator: '/administrator',
    members: '/all/members',
    createMember: '/create/member:teamId',
    memberSettings: '/member/settings:userId',
    spreadSheetSettings: '/spread/sheet/settings:userId',
}