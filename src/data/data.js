import { v4 as uuid4 } from 'uuid'

export const data = [
    { 
        id: uuid4(), 
        type: 'video',
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        views: 50
    },
    {
        id: uuid4(),
        type: 'video',
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        views: 12
    },
    {
        id: uuid4(),
        type: 'article',
        title: 'Невероятные события в неизвестном поселке...',
        views: 175
    },
    {
        id: uuid4(),
        type: 'article',
        title: 'Секретные данные были раскрыты!',
        views: 1532
    },
    {
        id: uuid4(),
        type: 'video',
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        views: 4253
    },
    {
        id: uuid4(),
        type: 'article',
        title: 'Кот Бегемот обладает невероятной...',
        views: 12
    },
];