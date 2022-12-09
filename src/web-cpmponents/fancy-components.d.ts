import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'fc-bubbles': {
                click: boolean
                children: Element
            }
        }
    }
}
