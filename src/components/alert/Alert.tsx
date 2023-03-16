import { Props } from './Alert.interface';
import styles from './Alert.module.scss';

const Alert = ({ text, role = '', marginBottom = 0 }: Props): JSX.Element => {
    const getPanelRole = (role: string) => {
        switch (role) {
            case 'primary':
                return styles.alert___primary;
            case 'info':
                return styles.alert___info;
            case 'success':
                return styles.alert___success;
            case 'warning':
                return styles.alert___warning;
            case 'danger':
                return styles.alert___danger;
            default:
                return '';
        }
    };

    return (
        <div className={[styles.alert, getPanelRole(role)].join(' ')} style={{ marginBottom: `${marginBottom}px` }}>
            <p>{text}</p>
        </div>
    );
};

export default Alert;
