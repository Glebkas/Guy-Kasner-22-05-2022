import styled from 'styled-components';
import Select from 'react-select';

export const SearchInput = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-bg-card-search)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            boxShadow: 'var(--shadow)',
            height: '48px',
            cursor: 'pointer',
            border: 'none',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            margin: '0',
            opacity: '1',
            backgroundColor: state.isSelected
                ? 'var(--colors-bg-card-search)'
                : 'var(--colors-ui-base)',
        }),
    },
})`
    width: 100%;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;

    & > * {
        boxshadow: 'var(--shadow)';
        border-radius: var(--radii);
    }

    & * {
        color: var(--color-text) !important;
    }

    & > div[id] {
        background-color: var(--colors-bg-card-search);
        padding: 0rem;
    }
`;
// margin-left: 2rem;
// border: none;
// outline: none;
// color: var(--colors-text);
// width: 100%;
// background: var(--colors-ui-base);
