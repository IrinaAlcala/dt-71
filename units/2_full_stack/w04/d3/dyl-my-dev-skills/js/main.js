let removedSkills = [];

$(".list-skills").on("click", function(evt) {
  let targetedRow = $(this).closest("tr");
  removedSkills.push(targetedRow[0].evt.target);
  console.log(removedSkills);
  targetedRow.fadeOut(500, function() {
    targetedRow.remove();
  });
});

$(".add-skill").on("click", function(evt) {
  let addSkill = $("input").val();
  let addRow = `<tr><td><button>X</button></td></tr>
  <td>${addSkill}</td>`;
  $("list-skills").append(addRow);
});