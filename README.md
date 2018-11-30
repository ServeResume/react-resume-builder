react-resume-builder
-----
A React project to create and design your resume and convert to PDF in letter or A4 format.

Is This Project For You
-------
If you are a frontender who is looking to design a resume with the tools that you love and use daily then yes.

Getting Started
-------
Clone the repository
```
git clone https://github.com/ResumeInDesign/react-resume-builder.git
cd react-resume-builder
```

Install dependencies and start the project
```
npm i
npm start
```

Download to PDF
--------
Once you finish with filling and designing your resume you can convert it to PDF by running this command
```
npm run convert-pdf -- [options]
```

Options
```
--paperSize     One of 'a4' or 'letter'. alias -p
```

A new pdf file will be generated in the `output/` directory. **NOTE:** Running this command will NOT override the previous generated resumes.

Design Your Resume
-------
You can find all resume templates under [/src/components](/src/components) directory.

All templates will follow this folder structure
```
├── ResumeTemplate         # Template directory
   ├── index.js            # Main component file
   ├── Utils               # Utility components for this template
   ├── Sections            # All supported sections components
   ├── Layout              # Resume layout components e.g. LeftColumn
```

Fill in Your Resume Data
-------
You can find all the data you need to change under [/src/resume](/src/resume) directory.

Motivation Behind This Project
-------
Designing a resume is a tedious task specially for someone who doesn't have experience with design tools like Photoshop or Illustrator. Most people end up having to use one of the online resume builders which are great but sometimes they dont provide the flexiblity you are looking for.

In [ResumeInDesign](https://www.resumeindesign.com) we want to change that, that's why we built [resumeindesign.com](https://www.resumeindesign.com) ofcourse but also this tool to let frontenders design their own resume with the tools they love and use daily.

Vision
-------
This is an open source project and will always be, we will keep adding more and more resume template designs as we go. This project will be maintained by [ResumeInDesign](https://www.resumeindesign.com) team but we welcome any contribution.

License
------
This project is licensed under the MIT license, Copyright (c) 2018 [ResumeInDesign](https://www.resumeindesign.com). For more information see [LICENSE.md](/LICENSE.md).

