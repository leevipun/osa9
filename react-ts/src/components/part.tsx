const typeCheking = (part: ) => {
    courseParts.forEach(part => {
  

    switch (part.kind) {
        case 'basic':
            console.log(part.name, part.description, part.exerciseCount)
            break
        case 'group':
            console.log(part.name, part.exercisesCount, part.groupProjectCount)
            break
        case 'background':
            console.log(part.name, part.description, part.backgroundMaterial)
    }
        });
}