import { StyledEntryCard } from './style';

function EntryCard({ children }) {
    return (
        <StyledEntryCard>
            {children}
        </StyledEntryCard>
    );
}

export default EntryCard;