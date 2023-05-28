type Employee = {
    name: string,
    job: string
}

type Manager = {
    name: string,
    manages: Person<Employee>[]
}

type Person<PersonType, DateType = string> = {
 createdAt: DateType,
 updatedAt: DateType,
 data: PersonType
}
const tim: Person<Employee, string> = {
    createdAt: "01/01/2022",
    updatedAt: "01/01/2022",
    data: {
        name: "Tim",
        job: "security",
    }
}

const jack: Person<Employee, string> = {
    createdAt: "01/01/2022",
    updatedAt: "01/01/2022",
    data: {
        name: "Jack",
        job: "Receptionist",
    }
}

const anna: Person<Manager, Date> = {
    createdAt: new Date(),
    updatedAt: new Date(),
    data: {
        name: "Anna",
        manages: [tim, jack],
    }
}