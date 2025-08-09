import { mockClassrooms } from "./classrooms"
import { mockProfessor } from "./professors"

const profUser = mockProfessor.find(mp => mp.user.id === 98881)
const profClasses = mockClassrooms.filter(pl => pl.professor.user === profUser?.user)

export const mockLogin = {user: profUser, classes: profClasses}
