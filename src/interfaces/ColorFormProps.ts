export interface ColorFormProps{
    hex: string;
    addColor: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
}