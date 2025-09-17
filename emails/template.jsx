import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email({
  userName = "User",
  type = "budget-alert",
  data = {},
}) {
  if (type === "budget-alert") {
    const { percentageUsed = 0, budgetAmount = 0, totalExpenses = 0 } = data;
    const remaining = budgetAmount - totalExpenses;

    const emoji =
      percentageUsed < 50 ? "🟢" : percentageUsed < 80 ? "🟠" : "🔴";

    return (
      <Html>
        <Head />
        <Preview>
          {emoji} Budget Alert: You’ve used {percentageUsed.toFixed(1)}% – Stay
          on track with ArthyaAi
        </Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>📊 Budget Usage Alert</Heading>

            <Text style={styles.text}>
              Hello <strong>{userName}</strong>,
            </Text>
            <Text style={styles.text}>
              Your smart assistant <strong>ArthyaAi</strong> just noticed you've
              used{" "}
              <strong style={styles.warning}>
                {percentageUsed.toFixed(1)}%
              </strong>{" "}
              of your monthly budget.
            </Text>
            <Text style={styles.text}>
              It’s a good time to review your spending and avoid surprises later
              in the month. Here’s a snapshot of your budget:
            </Text>

            {/* PROGRESS BAR */}
            <Section style={styles.progressSection}>
              <Text style={styles.progressLabel}>Budget Usage</Text>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${percentageUsed}%`,
                    backgroundColor:
                      percentageUsed > 80 ? "#dc2626" : "#3b82f6",
                  }}
                />
              </div>
              <Text style={styles.progressText}>
                {emoji} {percentageUsed.toFixed(1)}% used
              </Text>
            </Section>

            {/* BUDGET STATS */}
            <Section style={styles.statsRow}>
              <div style={styles.statBox}>
                <Text style={styles.statLabel}>Budget</Text>
                <Text style={styles.statValue}>
                  ₹{budgetAmount.toLocaleString()}
                </Text>
              </div>
              <div style={styles.statBox}>
                <Text style={styles.statLabel}>Spent</Text>
                <Text style={styles.statValue}>
                  ₹{totalExpenses.toLocaleString()}
                </Text>
              </div>
              <div style={styles.statBox}>
                <Text style={styles.statLabel}>Remaining</Text>
                <Text style={styles.statValue}>
                  ₹{remaining.toLocaleString()}
                </Text>
              </div>
            </Section>

            <Text style={styles.tip}>
              💡 Tip: Track and adjust expenses weekly to stay financially fit.
            </Text>

            <Text style={styles.footer}>
              This alert was generated to help you stay in control of your
              budget. <br />~ Powered by <strong>ArthyaAi</strong>
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  return null;
}

const styles = {
  body: {
    backgroundColor: "#f4f4f5",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    padding: "20px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#374151",
    margin: "0 0 16px",
    lineHeight: "1.5",
  },
  warning: {
    color: "#dc2626",
    fontWeight: "600",
  },
  statsRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    margin: "24px 0",
  },
  statBox: {
    flex: "1",
    padding: "16px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    textAlign: "center",
    border: "1px solid #e5e7eb",
  },
  statLabel: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "6px",
  },
  statValue: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2937",
  },
  tip: {
    fontSize: "14px",
    color: "#10b981",
    marginTop: "16px",
  },
  footer: {
    fontSize: "12px",
    color: "#9ca3af",
    textAlign: "center",
    marginTop: "32px",
    borderTop: "1px solid #e5e7eb",
    paddingTop: "16px",
  },
  progressSection: {
    marginTop: "24px",
  },
  progressLabel: {
    fontSize: "14px",
    marginBottom: "6px",
    color: "#4b5563",
  },
  progressBar: {
    width: "100%",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    transition: "width 0.3s ease-in-out", // won't animate in email but fallback-safe
  },
  progressText: {
    fontSize: "14px",
    marginTop: "8px",
    color: "#6b7280",
    textAlign: "center",
  },
};
