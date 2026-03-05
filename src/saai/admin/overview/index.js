import './index.scss';
import { __ } from '@wordpress/i18n';
import { render } from '@wordpress/element';

const SaaiOverviewPage = () => {
    return (
        <div className="saai-admin-layout">
            <div className="saai-admin__header">
                <div className="saai-admin__header-wrapper">
                    <h1>{ __( 'SAAI Overview', 'saai-blocks' ) }</h1>
                </div>
            </div>
            <div className="saai-admin__content">
                <p>{ __( 'Welcome to the SAAI admin overview page.', 'saai-blocks' ) }</p>
            </div>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');
    if (root) {
        render(<SaaiOverviewPage />, root);
    }
});
