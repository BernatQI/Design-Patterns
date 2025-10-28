// Component: defines interface for objects that can have responsibilities added dynamically
export interface Component {
    operation(): string;
    getCost(): number;
}