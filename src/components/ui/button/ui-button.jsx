import cn from 'classnames';

function UiButton({ children, outline }) {
    return (
        <>
            <button className={cn('button', {
                'button--outline': outline,
            })}>
                {children}
            </button>
        </>
    );
}

export default UiButton;