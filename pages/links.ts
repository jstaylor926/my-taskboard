import { LinkCardType } from "../components/UI/ui-types";

export const links: LinkCardType[] = [
    {
        title: 'Tasks',
        link: '/tasks/tasks',
        description: 'Create tasks. Complete tasks. Remove Tasks. No tasks remaining? Have a drink, enjoy the rest of the day.',
        linkPath: 'Go to Tasks'
    },
    {
        title: 'Notes',
        link: '/notes/notes',
        description: 'Better notes mean better learning. Remind yourself to read the notes you have taken',
        linkPath: 'Go to Notes'
    },
    {
        title: 'Planner',
        link: '/planner/planner',
        description: 'Make a plan. Write it down. Do it. Repeat. Die',
        linkPath: 'Go to Planner'
    },
    {
        title: 'Calendar',
        link: '/calendar/calendar',
        description: 'Things I can not forget. Events coming up. A calendar.',
        linkPath: 'Go to Calender'
    }
]