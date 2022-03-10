import { LinkCardType } from "../components/UI/ui-types";

export const links: LinkCardType[] = [
    {
        title: 'Tasks',
        link: '/tasks/tasks',
        description: 'Shit I have to do',
        linkPath: 'Go to tasks'
    },
    {
        title: 'Notes',
        link: '/notes/notes',
        description: 'All the notes. Will I read them again. Probably not. READ THEM!!!! What is the point if you do not',
        linkPath: 'check your notes'
    },
    {
        title: 'Planner',
        link: '/planner/planner',
        description: 'Make a plan. Write it down. Do it. Repeat. Die',
        linkPath: 'plan away'
    },
    {
        title: 'Calendar',
        link: '/calendar/calendar',
        description: 'Things I can not forget, must attend. That is all',
        linkPath: 'what going on'
    }
]