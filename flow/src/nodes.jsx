const initialNodes = [
    {
        id: 'n-1',
        type: 'startNode',
        position: {
            x: 0,
            y: 0
        },
        data: {
            label: 'Добавлен в список «List Sample» id 3221'
        }
    },
    {
        id: 'n-2',
        type: 'conditionNode',
        position: {
            x: -100,
            y: 200
        },
        data: {
            label: 'Есть ли имейл в списке «List Example» id 3220'
        }
    },
    {
        id: 'n-3',
        type: 'emailNode',
        position: {
            x: -500,
            y: 400
        },
        data: {
            label: 'Отправить имейл c id 56789'
        }
    },
    {
        id: 'n-4',
        type: 'emailNode',
        position: {
            x: 500,
            y: 400
        },
        data: {
            label: 'Отправить имейл c id 56790'
        }
    },
    {
        id: 'n-5',
        type: 'waitNode',
        position: {
            x: -450,
            y: 600
        },
        data: {
            label: 'Ждать 48 часов'
        }
    },
    {
        id: 'n-6',
        type: 'waitNode',
        position: {
            x: 550,
            y: 600
        },
        data: {
            label: 'Ждать 48 часов'
        }
    },
    {
        id: 'n-7',
        type: 'conditionNode',
        position: {
            x: -600,
            y: 800
        },
        data: {
            label: 'Кликнул на определнную ссылку в письме с id 56789'
        }
    },
    {
        id: 'n-8',
        type: 'conditionNode',
        position: {
            x: 400,
            y: 800
        },
        data: {
            label: 'Кликнул на определнную ссылку в письме с id 56790'
        }
    },
    {
        id: 'n-9',
        type: 'actionNode',
        position: {
            x: -800,
            y: 1000
        },
        data: {
            label: 'Добавить подписчика в сценарий с id 327854'
        }
    },
    {
        id: 'n-10',
        type: 'emailNode',
        position: {
            x: -200,
            y: 1000
        },
        data: {
            label: 'Отправить имейл c id 56793'
        }
    },
    {
        id: 'n-11',
        type: 'emailNode',
        position: {
            x: 200,
            y: 1000
        },
        data: {
            label: 'Отправить имейл c id 56791'
        }
    },
    {
        id: 'n-12',
        type: 'emailNode',
        position: {
            x: 800,
            y: 1000
        },
        data: {
            label: 'Отправить имейл c id 56792'
        }
    },
    {
        id: 'n-13',
        type: 'endNode',
        position: {
            x: -800,
            y: 1200
        },
        data: {
            label: 'Конец сценария'
        }
    },
    {
        id: 'n-14',
        type: 'waitNode',
        position: {
            x: -150,
            y: 1200
        },
        data: {
            label: 'Ждать 24 часа'
        }
    },
    {
        id: 'n-15',
        type: 'actionNode',
        position: {
            x: 200,
            y: 1200
        },
        data: {
            label: 'Добавить тег «Активный» подписчику'
        }
    },
    {
        id: 'n-16',
        type: 'actionNode',
        position: {
            x: 800,
            y: 1200
        },
        data: {
            label: 'Изменить статус подписчика на «Отписался»'
        }
    },
    {
        id: 'n-17',
        type: 'conditionNode',
        position: {
            x: -300,
            y: 1600
        },
        data: {
            label: 'Открыл письмо с id 567993'
        }
    },
    {
        id: 'n-18',
        type: 'endNode',
        position: {
            x: 200,
            y: 1400
        },
        data: {
            label: 'Конец сценария'
        }
    },
    {
        id: 'n-19',
        type: 'endNode',
        position: {
            x: 800,
            y: 1400
        },
        data: {
            label: 'Конец сценария'
        }
    },
    {
        id: 'n-20',
        type: 'actionNode',
        position: {
            x: -500,
            y: 1800
        },
        data: {
            label: 'Добавить тег «Спящий» подписчику'
        }
    },
    {
        id: 'n-21',
        type: 'actionNode',
        position: {
            x: 100,
            y: 1800
        },
        data: {
            label: 'Добавить тег «Отток» подписчику'
        }
    },
    {
        id: 'n-22',
        type: 'endNode',
        position: {
            x: -500,
            y: 2000
        },
        data: {
            label: 'Конец сценария'
        }
    },
    {
        id: 'n-23',
        type: 'endNode',
        position: {
            x: 100,
            y: 2000
        },
        data: {
            label: 'Конец сценария'
        }
    },
];

export default initialNodes;