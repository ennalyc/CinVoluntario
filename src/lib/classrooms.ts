import { mockClasses } from "./classes"
import { mockStudents } from "./students"

export const mockClassrooms: Classroom[] = mockClasses.map((cls) => ({
    class: cls,
    enrolledStudents: mockStudents.filter(student => student.classes.some(sc => sc.id === cls.id))
}));