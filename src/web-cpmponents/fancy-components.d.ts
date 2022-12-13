import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'fc-bubbles': {
                click: boolean
                children?: Element
                onClick?: React.MouseEventHandler<HTMLImageElement> | undefined
            },
            'fc-typing-input': {
                children?: Element
                placeholder: string
                height?: string
                onInput?: any
                onChange?: any
            }
        }
    }
}
