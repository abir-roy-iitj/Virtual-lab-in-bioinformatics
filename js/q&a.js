var quiz = {
  JS: [
    {
      id: 1,
      question: "The primary structure is primarily maintained by",
      options: [
        {
          a: "Peptide bond",
          b: "Hydrogen bond",
          c: "Ionic bond",
          d: "Hydrophobic bonds",
        },
      ],
      answer: "Peptide bond",
      score: 0,
      status: "",
    },
    {
      id: 2,
      question:
        "Which of the following statements are true regarding primary structure of proteins?",
      options: [
        {
          a: "Primary structure denote the number of amino acids in a protein",
          b: "Primary structure denote the sequence of amino acids in a protein",
          c: "Primary structure determines the biological activity of a protein",
          d: "all of these",
        },
      ],
      answer: "all of these",
      score: 0,
      status: "",
    },
    {
      id: 3,
      question: "Which of the following amino acid is a alpha helix terminator",
      options: [
        {
          a: "cysteine",
          b: "alanine",
          c: "proline",
          d: "isoleucine",
        },
      ],
      answer: "proline",
      score: 0,
      status: "",
    },
    {
      id: 4,
      question: "The secondary structure is primarily maintained by",
      options: [
        {
          a: "Van der waals force",
          b: "Hydrogen bond",
          c: "Ionic bond",
          d: "Hydrophobic bonds",
        },
      ],
      answer: "Hydrogen bond",
      score: 0,
      status: "",
    },

    {
      id: 5,
      question:
        "Which of the following is the most common and stable conformation for a polypeptide chain?",
      options: [
        {
          a: "Alpha helix",
          b: "Beta pleated sheets",
          c: "Anti parallel beta pleated sheet",
          d: "Tertiary structure",
        },
      ],
      answer: "Alpha helix",
      score: 0,
      status: "",
    },
    {
      id: 6,
      question:
        "The amyloid protein deposition associated with Alzheimer's disease is composed of",
      options: [
        {
          a: "Alpha helix",
          b: "Beta pleated sheets",
          c: "Beta bends",
          d: "Tertiary structure",
        },
      ],
      answer: "Beta pleated sheets",
      score: 0,
      status: "",
    },
    {
      id: 7,
      question: "In alpha helix, the bonding is between the",
      options: [
        {
          a: "Adjacent amino acids",
          b: "Carbonyl oxygen of one peptide bond to the NH group of the 4th amino acid away",
          c: "Carbonyl oxygen of second peptide bond to the NH group of the 3rd amino acid away",
          d: "Carbonyl oxygen of second peptide bond to the NH group of the 5th amino acid away",
        },
      ],
      answer:
        "Carbonyl oxygen of one peptide bond to the NH group of the 4th amino acid away",
      score: 0,
      status: "",
    },
    {
      id: 8,
      question:
        "Which of the following statements are true regarding tertiary structure of proteins?",
      options: [
        {
          a: "3 dimensional structure of a protein",
          b: "It is the biologically active conformation",
          c: "Primary structure of protein determines the tertiary structure",
          d: "All of these",
        },
      ],
      answer: "All of these",
      score: 0,
      status: "",
    },
    {
      id: 9,
      question: "The most common amino acid in beta bend is",
      options: [
        {
          a: "cysteine",
          b: "glycine",
          c: "serine",
          d: "methionine",
        },
      ],
      answer: "glycine",
      score: 0,
      status: "",
    },
    {
      id: 10,
      question:
        "Which of the following statements are true regarding quaternary structure of protein?",
      options: [
        {
          a: "Refers to organisation and spatial arrangements of amino acids within a polypeptide chain",
          b: "Refers to organisation and spatial arrangements of proteins with many polypeptide chains",
          c: "Both a and b",
          d: "None of these",
        },
      ],
      answer:
        "Refers to organisation and spatial arrangements of proteins with many polypeptide chains",
      score: 0,
      status: "",
    },
  ],
};
var quizApp = function () {
  this.score = 0;
  this.qno = 1;
  this.currentque = 0;
  var totalque = quiz.JS.length;
  this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
      $("#tque").html(totalque);
      $("#previous").attr("disabled", false);
      $("#next").attr("disabled", false);
      $("#qid").html(quiz.JS[this.currentque].id + ".");
      $("#question").html(quiz.JS[this.currentque].question);
      $("#question-options").html("");
      for (var key in quiz.JS[this.currentque].options[0]) {
        if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
          $("#question-options").append(
            "<div class='form-check option-block'>" +
              "<label class='form-check-label'>" +
              "<input type='radio' class='form-check-input' name='option' id='q" +
              key +
              "' value='" +
              quiz.JS[this.currentque].options[0][key] +
              "'><span id='optionval'>" +
              quiz.JS[this.currentque].options[0][key] +
              "</span></label>"
          );
        }
      }
    }
    if (this.currentque <= 0) {
      $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
      $("#next").attr("disabled", true);
      for (var i = 0; i < totalque; i++) {
        this.score = this.score + quiz.JS[i].score;
      }
      return this.showResult(this.score);
    }
  };
  this.showResult = function (scr) {
    $("#result").addClass("result");
    $("#result").html(
      "<h1 class='res-header'>Total Score: &nbsp;" +
        scr +
        "/" +
        totalque +
        "</h1>"
    );
    for (var j = 0; j < totalque; j++) {
      var res;
      if (quiz.JS[j].score == 0) {
        res =
          '<span class="wrong">' +
          quiz.JS[j].score +
          '</span><i class="fa fa-remove c-wrong"></i>';
      } else {
        res =
          '<span class="correct">' +
          quiz.JS[j].score +
          '</span><i class="fa fa-check c-correct"></i>';
      }
      $("#result").append(
        '<div class="result-question"><span>Q ' +
          quiz.JS[j].id +
          "</span> &nbsp;" +
          quiz.JS[j].question +
          "</div>" +
          "<div><b>Correct answer:</b> &nbsp;" +
          quiz.JS[j].answer +
          "</div>" +
          '<div class="last-row"><b>Score:</b> &nbsp;' +
          res +
          "</div>"
      );
    }
  };
  this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;"); //for <
    option = option.replace(/>/g, "&gt;"); //for >
    option = option.replace(/"/g, "&quot;");
    if (option == quiz.JS[this.currentque].answer) {
      if (quiz.JS[this.currentque].score == "") {
        quiz.JS[this.currentque].score = 1;
        quiz.JS[this.currentque].status = "correct";
      }
    } else {
      quiz.JS[this.currentque].status = "wrong";
    }
  };
  this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
  };
};
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
  jsq.displayQuiz(0);
  $("#question-options").on(
    "change",
    "input[type=radio][name=option]",
    function (e) {
      //var radio = $(this).find('input:radio');
      $(this).prop("checked", true);
      selectedopt = $(this).val();
    }
  );
});
$("#next").click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(1);
});
$("#previous").click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(-1);
});
