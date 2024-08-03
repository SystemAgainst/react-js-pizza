import cn from 'classnames';

function UiButton({ children, outline, onClick, className }) {
    return (
        <>
            <button
                onClick={onClick}
                className={cn('button', className, {
                'button--outline': outline,
            })}>
                {children}
            </button>
        </>
    );
}

export default UiButton;