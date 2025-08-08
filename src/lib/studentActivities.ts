const image1 = 'https://example.com/path_to_your_image.png'

export const mockStudentActivities: Activity[] = [
    {
        id: '7867887hi',
        student: {
                    user: {
                        id: 100060001,
                        name: 'Ana Teixeira Gomes',
                        email: 'ateixeira@cin.ufpe.br',
                        password: 96478649
                    },
                    classes: [
                        {
                            id: 10898,
                            code: '6hJK00p',
                            name: 'Concepção de Artefatos Digitais'
                        },
                        {
                            id: 10897,
                            code: '7yAF66u',
                            name: 'Desenvolvimento de Software'
                        }
                    ]
                },
        class: {
                    id: 10897,
                    code: '7yAF66u',
                    name: 'Desenvolvimento de Software'
                },
        title: 'Visita ao espaço físico do orfanato',
        date: new Date('2025-08-02'),
        content: [
            {
                id: 20005,
                activityId: '7867887hi',
                title: 'Visita ao espaço físico do orfanato',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet orci ipsum, eu fringilla justo fringilla quis. Praesent elementum dapibus lorem vitae cursus. Aliquam diam dolor, dapibus molestie placerat non, dignissim sed dolor. Morbi volutpat lacus eu ipsum ullamcorper porttitor. Nulla dapibus vehicula massa id pretium. Donec ex nisi, fringilla vitae convallis quis, commodo et ligula. Quisque ac nibh quis enim commodo varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet orci ipsum, eu fringilla justo fringilla quis. Praesent elementum dapibus lorem vitae cursus. Aliquam diam dolor, dapibus molestie placerat'
            },
            {
                id: 20006,
                activityId: '7867887hi',
                title: 'Problemas Encontrados', 
                content: [
                    {id: 1, main: 'Problema numero 1'},
                    {id: 2, main: 'Problema numero 2'},
                    {id: 3, main: 'Problema numero 3'},
                    {id: 4, main: 'Problema numero 4'},
                ],
            },
            {
                id: 20007,
                activityId: '7867887hi',
                title: 'Imagens', 
                content: [
                    {id: 1, src: image1},
                ],
            },
        ],
        description: 'O presente documento consolida as observações iniciais realizadas durante a visita técnica às instalações do Orfanato Brilho Feliz. A visita, conduzida pela equipe de projeto da disciplina de Engenharia de Software, teve como objetivo principal a imersão no ambiente operacional da instituição para compreender seus fluxos de trabalho, identificar necessidades e mapear os processos correntes ("as-is")'
    }
]