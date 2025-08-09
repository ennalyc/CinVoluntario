import { mockClasses } from "./classes"
import { mockStudents } from "./students"
import { mockProfessor } from "./professors";

export const mockClassrooms: Classroom[] = mockProfessor.flatMap((prof, index) => prof.classes.map((cls) => ({
    id: index,
    professor: prof,
    class: cls,
    enrolledStudents: mockStudents.filter(student => student.classes.some(sc => sc.id === cls.id)),
})));