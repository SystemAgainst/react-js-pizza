import cn from 'classnames';
import PropTypes from "prop-types";

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

UiButton.propTypes = {
    onClick: PropTypes.func,
};

export default UiButton;