import "./styles.css";
import tests from "./testCases";

setTimeout(() => {
  const buffer = ["Fractions", "=========", ""];

  for (let i = 0; i < tests.length; i++) {
    const [f1, fn, [f2], exp] = tests[i];
    buffer.push(`Case ${i + 1}:`);
    buffer.push(`${fn}(${f1}, ${f2})`);
    buffer.push(`Expected: ${exp}`);
    buffer.push(`Actual: ${f1[fn](f2).equals(exp) ? "✔" : "❌"} ${f1[fn](f2)}`);
    buffer.push("");
  }

  const output = document.getElementById("output");
  output.innerHTML = buffer.join("\n");

  console.debug("loaded");
}, 100);
