interface Course{
    id: number;
    title: string;
}

interface Data{
    id: number;
    name: string;
    role: string;
    email: string;
    isActive: boolean;
    courses: Course[];
}

interface Student{
    success: boolean;
    message: string;
    data: Data;
}

