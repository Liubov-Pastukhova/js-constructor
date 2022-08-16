import image from './assets/6664271.jpg'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Free Online Wedding Planner', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #7ebea3, #437f77)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        alt: '',
        imageStyles: {
            width: '100%'
        }
    }),
    new TextBlock('Wedding Planning Made Simple.', {
        styles: {
            background: 'linear-gradient(to right, #7ebea3, #437f77)',
            color: '#fff',
            'font-size': '1.5rem',
            'font-weight': 'bold',
            padding: '1rem',
            margin: '0',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock([
        'Discover and book your dream wedding suppliers all in one place.',
        'Plan your wedding from home and on the go.',
        'Get it all down on paper with our new Wedding Planner book',
        'Get your daily dose of wedding inspiration.'
    ], {
        styles: {
            background: '#fff',
            color: '#948A8B',
            padding: '1rem',
            'text-align': 'center'
        }
    })
    
]
