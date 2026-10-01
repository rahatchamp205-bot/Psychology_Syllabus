import { StatTestGuide, StatPitfall, YearProgression } from '../types';

export const STATS_PROGRESSION: YearProgression[] = [
  {
    year: 1,
    title: 'Year 1: Foundations of Scientific Inquiry & Descriptive Statistics',
    focus: 'Scientific epistemology, operationalization, scales of measurement, central tendency, variability, and the logic of hypothesis testing.',
    courses: ['PSY 105', 'PSY 130'],
    coreCompetencies: [
      'Operationalize abstract psychological constructs into measurable variables',
      'Distinguish nominal, ordinal, interval, and ratio scales of measurement',
      'Calculate and interpret mean, median, mode, variance, and standard deviation',
      'Formulate null (H0) and alternative (H1) hypotheses',
      'Understand sampling distributions, the Central Limit Theorem, and standard error'
    ]
  },
  {
    year: 2,
    title: 'Year 2: Experimental Design, Probability & Inferential Foundations',
    focus: 'Probability theory, normal distribution, z-scores, independent/paired t-tests, one-way and factorial ANOVA, post-hoc tests, correlation, and power analysis.',
    courses: ['PSY 230', 'PSY 270'],
    coreCompetencies: [
      'Conduct and interpret independent-samples and paired-samples t-tests',
      'Calculate Cohen’s d effect sizes with confidence intervals',
      'Execute One-Way and Two-Way Factorial ANOVA with Tukey post-hoc tests',
      'Assess statistical power and compute a priori sample size using G*Power',
      'Calculate Pearson’s r and evaluate threats to construct and internal validity'
    ]
  },
  {
    year: 3,
    title: 'Year 3: Regression, Complex Causal Designs & Evidence Synthesis',
    focus: 'Multiple regression, mediation (bootstrapping), moderation, logistic regression, quasi-experiments, PRISMA systematic reviews, meta-analysis, and open science.',
    courses: ['PSY 320', 'PSY 330', 'PSY 370'],
    coreCompetencies: [
      'Fit and interpret multiple linear regression models with dummy coding and diagnostic checks (VIF, Cook’s d)',
      'Test indirect effects in mediation models using Preacher & Hayes bootstrapping',
      'Evaluate simple slopes in moderation models with centered continuous predictors',
      'Design quasi-experimental studies (nonequivalent control groups, interrupted time-series)',
      'Compute pooled effect sizes, Forest plots, and between-study heterogeneity (I^2) in meta-analysis',
      'Preregister study protocols on the Open Science Framework (OSF)'
    ]
  },
  {
    year: 4,
    title: 'Year 4: Honours Thesis Design, Advanced Modeling & Capstone Execution',
    focus: 'Independent thesis formulation, a priori power estimation, advanced causal inference, data cleaning and assumption auditing, publication-quality APA reporting, and viva defense.',
    courses: ['PSY 420', 'PSY 430'],
    coreCompetencies: [
      'Formulate independent empirical research questions addressing identified scientific gaps',
      'Write comprehensive 10-15 page thesis proposals and 5,000+ word final honours theses',
      'Execute reproducible data cleaning, handling missing data mechanisms (MCAR, MAR)',
      'Construct publication-ready APA 7 tables, forest plots, and raincloud visualizations',
      'Present research findings in scientific poster format and defend methods in oral viva'
    ]
  }
];

export const STATISTICAL_TEST_GUIDES: StatTestGuide[] = [
  {
    id: 'independent-t-test',
    testName: 'Independent-Samples t-test',
    purpose: 'Compares the means of two independent, unrelated groups to determine if their population means differ significantly.',
    designType: 'Between-Subjects (2 groups)',
    variableTypes: '1 Categorical Independent Variable (2 levels) & 1 Continuous Dependent Variable (interval/ratio)',
    assumptions: [
      'Continuous dependent variable',
      'Independent observations (no matching or pairing)',
      'Normal distribution of DV within each group (or N > 30 per group via CLT)',
      'Homogeneity of variance (Levene’s test; use Welch’s t-test if violated)'
    ],
    apaTemplate:
      'An independent-samples t-test was conducted to compare [DV] in [Group 1] and [Group 2]. There was a significant [or non-significant] difference in scores for [Group 1] (M = [M1], SD = [SD1]) and [Group 2] (M = [M2], SD = [SD2]); t([df]) = [t-val], p = [p-val], 95% CI [[lower], [upper]], Cohen’s d = [d-val].',
    rCode: `# Independent-samples t-test in R
# Assuming dataframe 'df' with continuous variable 'dv' and factor 'group'
t_test_res <- t.test(dv ~ group, data = df, var.equal = FALSE) # Welch's t-test by default
print(t_test_res)

# Effect size via effectsize package
# library(effectsize)
# cohens_d(dv ~ group, data = df)`,
    pythonCode: `# Independent-samples t-test in Python
import scipy.stats as stats
import numpy as np

group1 = df[df['group'] == 'GroupA']['dv']
group2 = df[df['group'] == 'GroupB']['dv']

# Welch's t-test (equal_var=False)
t_stat, p_val = stats.ttest_ind(group1, group2, equal_var=False)
print(f"t = {t_stat:.2f}, p = {p_val:.3f}")

# Cohen's d calculation
diff = np.mean(group1) - np.mean(group2)
pooled_sd = np.sqrt(((len(group1)-1)*np.var(group1, ddof=1) + (len(group2)-1)*np.var(group2, ddof=1)) / (len(group1) + len(group2) - 2))
d = diff / pooled_sd
print(f"Cohen's d = {d:.2f}")`
  },
  {
    id: 'paired-t-test',
    testName: 'Paired-Samples (Dependent) t-test',
    purpose: 'Compares means from the same participants across two time points or two paired experimental conditions.',
    designType: 'Within-Subjects / Repeated Measures (2 conditions)',
    variableTypes: '1 Categorical Independent Variable (2 paired conditions) & 1 Continuous Dependent Variable measured twice',
    assumptions: [
      'Continuous dependent variable',
      'Pairs are matched or measurements are repeated on the same subjects',
      'The difference scores between pairs are normally distributed'
    ],
    apaTemplate:
      'A paired-samples t-test revealed a significant [or non-significant] increase [or decrease] in [DV] from [Condition 1] (M = [M1], SD = [SD1]) to [Condition 2] (M = [M2], SD = [SD2]); t([df]) = [t-val], p = [p-val], 95% CI of the difference [[lower], [upper]], Cohen’s d_z = [d-val].',
    rCode: `# Paired t-test in R
t_res <- t.test(df$pre_score, df$post_score, paired = TRUE)
print(t_res)`,
    pythonCode: `# Paired t-test in Python
import scipy.stats as stats

t_stat, p_val = stats.ttest_rel(df['pre_score'], df['post_score'])
print(f"Paired t = {t_stat:.2f}, p = {p_val:.3f}")`
  },
  {
    id: 'one-way-anova',
    testName: 'One-Way Between-Subjects ANOVA',
    purpose: 'Compares the means of three or more independent groups to test if at least one group mean differs significantly from the others.',
    designType: 'Between-Subjects (3+ groups)',
    variableTypes: '1 Categorical Independent Variable (3+ levels) & 1 Continuous Dependent Variable',
    assumptions: [
      'Continuous dependent variable',
      'Independent observations between all groups',
      'Normality within each group',
      'Homogeneity of variance (Levene’s test; use Welch’s ANOVA if violated)'
    ],
    apaTemplate:
      'A one-way between-subjects ANOVA was conducted to compare the effect of [IV] on [DV] across [Group 1, 2, 3]. There was a significant [or non-significant] effect of [IV], F([df_between], [df_within]) = [F-val], p = [p-val], eta^2_p = [eta-val]. Post-hoc comparisons using Tukey’s HSD test indicated that the mean score for [Group 1] was significantly different from [Group 2] (p < .05).',
    rCode: `# One-way ANOVA in R
fit <- aov(dv ~ group, data = df)
summary(fit)

# Post-hoc Tukey HSD
TukeyHSD(fit)`,
    pythonCode: `# One-way ANOVA in Python
import scipy.stats as stats
from statsmodels.stats.multicomp import pairwise_tukeyhsd

# Oneway F
f_stat, p_val = stats.f_oneway(group1, group2, group3)
print(f"F = {f_stat:.2f}, p = {p_val:.3f}")

# Tukey HSD
tukey = pairwise_tukeyhsd(endog=df['dv'], groups=df['group'], alpha=0.05)
print(tukey)`
  },
  {
    id: 'factorial-anova',
    testName: 'Two-Way Factorial ANOVA (2x2)',
    purpose: 'Examines the main effects of two categorical independent variables and their interaction effect on a continuous dependent variable.',
    designType: 'Factorial Between-Subjects (2 IVs)',
    variableTypes: '2 Categorical Independent Variables & 1 Continuous Dependent Variable',
    assumptions: [
      'Continuous dependent variable',
      'Independent observations across all cells of the factorial design',
      'Normality within each cell',
      'Homogeneity of variance across cells'
    ],
    apaTemplate:
      'A 2x2 between-subjects ANOVA was conducted to examine the effects of [IV1] and [IV2] on [DV]. The main effect of [IV1] was significant, F([df1], [df_err]) = [F1], p = [p1], eta^2_p = [eta1]. The main effect of [IV2] was [significant/non-significant], F([df2], [df_err]) = [F2], p = [p2], eta^2_p = [eta2]. Importantly, the interaction between [IV1] and [IV2] was significant, F([df_int], [df_err]) = [F_int], p = [p_int], eta^2_p = [eta_int]. Simple main effects tests revealed...',
    rCode: `# Two-Way Factorial ANOVA in R
fit_2way <- aov(dv ~ iv1 * iv2, data = df)
summary(fit_2way)

# library(emmeans)
# emmip(fit_2way, iv1 ~ iv2) # Interaction plot`,
    pythonCode: `# Two-way ANOVA in Python
import statsmodels.api as sm
from statsmodels.formula.api import ols

model = ols('dv ~ C(iv1) * C(iv2)', data=df).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print(anova_table)`
  },
  {
    id: 'pearson-correlation',
    testName: 'Pearson Product-Moment Correlation',
    purpose: 'Quantifies the linear association (strength and direction) between two continuous variables.',
    designType: 'Correlational / Observational',
    variableTypes: '2 Continuous Variables (interval or ratio)',
    assumptions: [
      'Both variables are continuous',
      'Linear relationship (verified by scatterplot inspection)',
      'Bivariate normality',
      'Absence of extreme outliers'
    ],
    apaTemplate:
      'A Pearson correlation coefficient was computed to assess the linear relationship between [Var 1] and [Var 2]. There was a significant [or non-significant] positive [or negative] correlation between the two variables, r([df]) = [r-val], p = [p-val], 95% CI [[lower], [upper]].',
    rCode: `# Pearson correlation in R
cor_res <- cor.test(df$var1, df$var2, method = "pearson")
print(cor_res)`,
    pythonCode: `# Pearson correlation in Python
import scipy.stats as stats

r, p_val = stats.pearsonr(df['var1'], df['var2'])
print(f"r = {r:.2f}, p = {p_val:.3f}")`
  },
  {
    id: 'multiple-regression',
    testName: 'Multiple Linear Regression',
    purpose: 'Predicts a continuous criterion variable from two or more continuous or categorical predictor variables simultaneously.',
    designType: 'Multivariable Predictive / Observational',
    variableTypes: 'Multiple Continuous/Categorical Predictor Variables & 1 Continuous Criterion Variable',
    assumptions: [
      'Linear relationship between predictors and outcome',
      'No severe multicollinearity (VIF < 5 or 10, Tolerance > 0.10)',
      'Homoscedasticity of residuals (equal variance across predicted values)',
      'Normally distributed residuals (Q-Q plot inspection)',
      'Independence of residuals (Durbin-Watson ~ 2.0)'
    ],
    apaTemplate:
      'A multiple linear regression was calculated to predict [DV] based on [IV1], [IV2], and [IV3]. A significant regression equation was found, F([df_reg], [df_res]) = [F-val], p = [p-val], with an R^2 of [R2] (adjusted R^2 = [Adj_R2]). [IV1] was a significant positive predictor (b = [b1], SE = [se1], beta = [beta1], t = [t1], p = [p1]), while [IV2] was not (p = [p2]).',
    rCode: `# Multiple Regression in R
model <- lm(dv ~ iv1 + iv2 + iv3, data = df)
summary(model)

# Multicollinearity check
# library(car)
# vif(model)`,
    pythonCode: `# Multiple Regression in Python
import statsmodels.api as sm

X = df[['iv1', 'iv2', 'iv3']]
X = sm.add_constant(X)
y = df['dv']

model = sm.OLS(y, X).fit()
print(model.summary())`
  },
  {
    id: 'chi-square-independence',
    testName: 'Chi-Square Test of Independence',
    purpose: 'Determines whether there is a statistically significant association between two categorical variables.',
    designType: 'Cross-Tabulation / Categorical Frequency',
    variableTypes: '2 Categorical Variables (nominal or ordinal)',
    assumptions: [
      'Categorical data with mutually exclusive categories',
      'Independent observations',
      'Expected cell counts >= 5 in at least 80% of cells (and no expected count < 1)'
    ],
    apaTemplate:
      'A chi-square test of independence was performed to examine the relation between [Var 1] and [Var 2]. The relation between these variables was significant [or non-significant], chi^2([df], N = [N]) = [chi2-val], p = [p-val], Cramer’s V = [V-val].',
    rCode: `# Chi-Square Test of Independence in R
tbl <- table(df$cat1, df$cat2)
chisq.test(tbl)`,
    pythonCode: `# Chi-Square Test in Python
import scipy.stats as stats
import pandas as pd

contingency_table = pd.crosstab(df['cat1'], df['cat2'])
chi2, p, dof, expected = stats.chi2_contingency(contingency_table)
print(f"Chi2 = {chi2:.2f}, df = {dof}, p = {p:.3f}")`
  }
];

export const STATISTICAL_PITFALLS: StatPitfall[] = [
  {
    id: 'p-hacking',
    name: 'P-Hacking & Researcher Degrees of Freedom',
    severity: 'High',
    description:
      'Engaging in post-hoc decisions (testing multiple DV transformations, selectively dropping outliers, peeking at data before deciding sample size, or trying covariates until p < .05 is achieved).',
    howToAvoid:
      'Preregister your sample size, stopping rule, outlier exclusion criteria, and exact model specifications on the Open Science Framework (OSF) before data collection.',
    example:
      'Simmons et al. (2011) famously showed that by testing multiple DVs and peeking, researchers can make completely random noise appear statistically significant (e.g. proving listening to music makes participants chronologically younger).'
  },
  {
    id: 'absence-of-evidence',
    name: 'Confusing "Failure to Reject H0" with "Proof of No Effect"',
    severity: 'Critical',
    description:
      'Asserting that because p >= .05, there is "no difference" or "no relationship" between variables.',
    howToAvoid:
      'A non-significant p-value means the observed data are consistent with the null hypothesis, often due to low statistical power. To argue for the absence of an effect, conduct an equivalence test (TOST) or Bayesian test for H0 support.',
    example:
      'Reporting "Training had no effect on memory performance (t(18) = 1.62, p = .12)" when N was so tiny that only massive effect sizes (d > 1.2) could have achieved significance.'
  },
  {
    id: 'correlation-causation',
    name: 'Confusing Correlation with Causation in Observational Data',
    severity: 'High',
    description:
      'Inferring that variable X causes variable Y based solely on observational correlations or cross-sectional regression coefficients.',
    howToAvoid:
      'Recognize the third-variable problem (confounding) and reverse causality. True causal inference requires experimental random assignment or rigorous quasi-experimental counterfactual methods (Rubin Causal Model).',
    example:
      'Finding a correlation between hours on social media and adolescent depressive symptoms and claiming social media directly causes depression without ruling out reverse causality.'
  },
  {
    id: 'dichotomizing-continuous',
    name: 'Dichotomizing Continuous Predictors (Median Splits)',
    severity: 'Medium',
    description:
      'Splitting a continuous variable (like anxiety score or age) at the median into "high" and "low" groups to run an ANOVA.',
    howToAvoid:
      'Keep continuous variables continuous! Use multiple linear regression or continuous moderation. Median splits discard variance, reduce statistical power (equivalent to throwing away 1/3 of your sample), and can generate spurious interaction effects.',
    example:
      'Splitting neuroticism scores into "High" vs "Low" groups at the sample median, treating two people who scored 50 and 51 as radically different while treating 51 and 99 as identical.'
  },
  {
    id: 'ignoring-effect-sizes',
    name: 'Relying Solely on P-Values While Ignoring Effect Sizes & Confidence Intervals',
    severity: 'High',
    description:
      'Evaluating the scientific importance of a result solely by whether p < .05, without reporting or interpreting effect sizes (Cohen’s d, r, R^2) and confidence intervals.',
    howToAvoid:
      'Always report effect sizes with their 95% confidence intervals. With a huge sample (e.g., N = 100,000), even clinically meaningless differences (d = 0.02) will produce p < .001. Conversely, meaningful effects may have p = .08 in small samples.',
    example:
      'Claiming a "highly significant and breakthrough educational intervention" because p = .002 in N = 50,000 students, when the actual improvement was 0.05 points on a 100-point exam (d = 0.03).'
  }
];
