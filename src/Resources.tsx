export interface CardInterface {
    id: number;
    name: string;
    isDone: boolean;
    link: string;
    description: string;
    tag: string;
    tagRight: string;
}

export interface Cards {
    cards: CardInterface[];
    setCards: React.Dispatch<React.SetStateAction<CardInterface[]>>;
}

export interface HeaderProps {
    topBar: string;
    setTopBar: React.Dispatch<React.SetStateAction<string>>;
    topBarCallback: (e: React.FormEvent) => void;
    searchInputRef: React.RefObject<HTMLInputElement | null>;
}