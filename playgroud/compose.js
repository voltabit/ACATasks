const compose =
  (...fns) =>
  (input) =>
    fns.reduceRight((res, fn) => fn(res), input);

const uni = {
  computerScienece: {
    firstGrade: {
      studentCount: 130,
      coursesCount: 6,
      averageOfStudent: 16.5,
    },
    secondGrade: {
      studentCount: 100,
      coursesCount: 5,
      averageOfStudent: 13.5,
    },
    thirdGrade: {
      studentCount: 95,
      coursesCount: 7,
      averageOfStudent: 17,
    },
    forthGrade: {
      studentCount: 77,
      coursesCount: 4,
      averageOfStudent: 15.7,
    },
  },
  mathematics: {
    firstGrade: {
      studentCount: 88,
      coursesCount: 5,
      averageOfStudent: 13.8,
    },
    secondGrade: {
      studentCount: 85,
      coursesCount: 8,
      averageOfStudent: 14.2,
    },
    thirdGrade: {
      studentCount: 70,
      coursesCount: 5,
      averageOfStudent: 15.7,
    },
    forthGrade: {
      studentCount: 77,
      coursesCount: 4,
      averageOfStudent: 16.8,
    },
  },
  physics: {
    firstGrade: {
      studentCount: 120,
      coursesCount: 3,
      averageOfStudent: 17.7,
    },
    secondGrade: {
      studentCount: 113,
      coursesCount: 5,
      averageOfStudent: 16.5,
    },
    thirdGrade: {
      studentCount: 95,
      coursesCount: 5,
      averageOfStudent: 17.7,
    },
    forthGrade: {
      studentCount: 92,
      coursesCount: 4,
      averageOfStudent: 16.9,
    },
  },
  biology: {
    firstGrade: {
      studentCount: 84,
      coursesCount: 6,
      averageOfStudent: 18,
    },
    secondGrade: {
      studentCount: 80,
      coursesCount: 5,
      averageOfStudent: 17.5,
    },
    thirdGrade: {
      studentCount: 80,
      coursesCount: 6,
      averageOfStudent: 18,
    },
    forthGrade: {
      studentCount: 77,
      coursesCount: 5,
      averageOfStudent: 18.5,
    },
  },
  genetics: {
    firstGrade: {
      studentCount: 67,
      coursesCount: 4,
      averageOfStudent: 16.5,
    },
    secondGrade: {
      studentCount: 66,
      coursesCount: 6,
      averageOfStudent: 17.7,
    },
    thirdGrade: {
      studentCount: 66,
      coursesCount: 6,
      averageOfStudent: 18.1,
    },
    forthGrade: {
      studentCount: 65,
      coursesCount: 7,
      averageOfStudent: 17.78,
    },
  },
};

const calcAverage = (numbers) =>
  numbers.reduce((sum, e) => {
    sum = sum + e;
    return sum;
  }, 0) / numbers.length;

const getGradesAverage = (faculty) =>
  Object.values(faculty).map((grade) => grade.averageOfStudent);

const getAveragesPerFaculty = (uni) =>
  Object.keys(uni).map((facultyName) => ({
    // [facultyName]: calcAverage(getGradesAverage(uni[facultyName])),
    [facultyName]: compose(calcAverage, getGradesAverage)(uni[facultyName]),
  }));

const findMax = (averagesPerFaculty) => {
  const facultyPair = averagesPerFaculty.reduce((maxResult, facultAvg) => {
    const currentMax = Object.values(maxResult)[0];
    const currentAvg = Object.values(facultAvg)[0];
    maxResult = currentMax < currentAvg ? facultAvg : maxResult;
    return maxResult;
  });

  return Object.keys(facultyPair)[0];
};

// console.log(findMax(getAveragesPerFaculty(uni)));
compose(console.log, findMax, getAveragesPerFaculty)(uni);

// f(g(h(r(x))));

// compose(f, g, h, r)(x);
