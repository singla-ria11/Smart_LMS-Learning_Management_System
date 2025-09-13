import Category from "../src/models/CategoryModel.js";
import Course from "../src/models/CourseModel.js";
import User from "../src/models/userModel.js";

const importData = async () => {
  try {
    console.log("Clearing database!");
    // clear the database
    await User.deleteMany();
    await Course.deleteMany();
    await Category.deleteMany();

    // insert users
    const usersData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./data/users.json"), "utf-8")
    );

    const usersWithHashedPassword = usersData.map((user) => {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      return {
        ...user,
        password: hashedPassword,
      };
    });

    const createdUsers = await User.insertMany(usersWithHashedPassword);
    const instructorUser = createdUsers.find(
      (user) => user.role === "instructor"
    );

    // insert categories
    const categoriesdata = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./data/category.json"), "utf-8")
    );
    const createdCategory = await Category.insertMany(categoriesdata);
    const webdevCategory = createdCategory.find(
      (category) => category.name === "Web Dev"
    );

    // insert courses
    const coursesData = [
      {
        title: "Complete Web Dev course 2025",
        description: "Learn web development from scratch",
        price: 99,
        instructor: instructorUser.id,
        category: webdevCategory.id,
      },
    ];
    await Course.insertMany(coursesData);
    console.log("Data imported successfully!");

    process.exit();
  } catch (error) {
    console.log("Error while adding data: ", error);
    process.exit(1);
  }

  // remove data
  const destroyData = () => {
    // deleteMany queries will go here!
    console.log("Data destroyed");
    process.exit();
  };

  // logic to add script to run seed file for different methods
  if (process.argv[2] === "-d") {
    destroyData();
  } else {
    importData("import data");
    console.log("import data");
  }
};
