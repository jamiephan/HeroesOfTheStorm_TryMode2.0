  var prompt = require('prompt');

  var schema = {
      properties: {
          LibraryName: {
            pattern: /^[a-zA-Z]+$/,
            message: 'Library name can only contain letters.',
            required: true
          },
          VariableName: {
            pattern: /^[a-zA-Z]+$/,
            message: 'Variable name can only contain letters.',
            required: true
          },
          Description: {
            required: true
          }
      }
  }

prompt.start();

prompt.get(schema, function (err, result) {

    if(err) return console.log(err);
    generate(result.LibraryName, result.VariableName, result.Description)
});

function generate(libname, varname, des){
    console.log("")
    console.log(`First, declare this trigger variable. Suggested to place it in a header file (${libname}_h.galaxy)`)
    console.log("")
    console.log(`    trigger ${libname}_gt_${varname};`)
    console.log("")
    console.log(`Then, in the main Library file (${libname}.galaxy), locate the ${libname}_InitTriggers() function and add this trigger init function:`)
    console.log("")
    console.log(`    ${libname}_gt_${varname}_Init();`)
    console.log("")
    console.log("Finally, in a blank space (root of the Library), insert the trigger code:")
    console.log("")
    console.log(`    //--------------------------------------------------------------------------------------------------`)
    console.log(`    // Trigger: ${des}`)
    console.log(`    //--------------------------------------------------------------------------------------------------`)
    console.log(`    `)
    console.log(`    bool ${libname}_gt_${varname}_Func(bool testConds, bool runActions) {`)
    console.log(`        if (!runActions) {`)
    console.log(`            return true;`)
    console.log(`        }`)
    console.log(`        //Insert the variables, conditions and actions here`)
    console.log(`        //For example:`)
    console.log(`        //UIDisplayMessage(PlayerGroupAll(), c_messageAreaDebug, StringToText("${varname}"));`)
    console.log(`        //it will print out the message "${varname}" in the debug area on the screen.`)
    console.log(`        return true;`)
    console.log(`    }`)
    console.log(`    `)
    console.log(`    void ${libname}_gt_${varname}_Init() {`)
    console.log(`        ${libname}_gt_${varname} = TriggerCreate("${libname}_gt_${varname}_Func");`)
    console.log(`        TriggerEnable(${libname}_gt_${varname}, true);`)
    console.log(`        //Add the function that fires the trigger event here, for example:`)
    console.log(`        //TriggerAddEventChatMessage(${libname}_gt_${varname}, c_playerAny, "${varname}", true);`)
    console.log(`        //it will run "${libname}_gt_${varname}_Func" when the player types "${varname}" in the chat. `)
    console.log(`    }`)
    console.log("")
}