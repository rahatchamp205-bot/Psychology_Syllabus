import React, { useState } from 'react';
import {
  X,
  Database,
  Download,
  Upload,
  RotateCcw,
  Printer,
  CheckCircle2,
  FileText,
  Award,
  BookOpen
} from 'lucide-react';
import { UserDegreeState } from '../types';
import {
  exportDegreeStateAsJson,
  importDegreeStateFromJson,
  resetDegreeState
} from '../utils/storage';
import { MASTER_COURSES } from '../data/courses';

interface ProgressDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  degreeState: UserDegreeState;
  onStateUpdated: (newState: UserDegreeState) => void;
}

export const ProgressDataModal: React.FC<ProgressDataModalProps> = ({
  isOpen,
  onClose,
  degreeState,
  onStateUpdated
}) => {
  const [importJsonText, setImportJsonText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [showImportBox, setShowImportBox] = useState(false);

  if (!isOpen) return null;

  const totalCoreCourses = MASTER_COURSES.filter(c => !c.isElective).length;
  const completedCourses = Object.entries(degreeState.courseProgress).filter(
    ([_, val]) => val?.status === 'completed'
  );
  const inProgressCourses = Object.entries(degreeState.courseProgress).filter(
    ([_, val]) => val?.status === 'in-progress'
  );

  const completedReadings = Object.values(degreeState.readingStatus).filter(
    s => s === 'Completed'
  ).length;

  const completedAssignments = Object.values(degreeState.assignmentStatus).filter(
    Boolean
  ).length;

  const handleExport = () => {
    exportDegreeStateAsJson(degreeState);
  };

  const handleImportSubmit = () => {
    setImportError(null);
    const imported = importDegreeStateFromJson(importJsonText);
    if (imported) {
      onStateUpdated(imported);
      setShowImportBox(false);
      setImportJsonText('');
      alert('Degree state successfully imported!');
    } else {
      setImportError('Invalid JSON format. Please verify your file contents.');
    }
  };

  const handleReset = () => {
    if (confirm('Warning: This will clear your degree progress, notes, and quiz scores from local storage. Proceed?')) {
      const reset = resetDegreeState();
      onStateUpdated(reset);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-900 text-amber-300">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-scholarly text-lg font-bold text-slate-900">
                Degree Audit, Progress & Data Management
              </h3>
              <p className="text-xs text-slate-500">
                Browser local storage persistence • JSON export/import • Degree transcript
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Degree Audit Summary Box (Printable) */}
          <div className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700">
                  HONOURS DEGREE TRANSCRIPT
                </span>
                <h4 className="font-serif-scholarly font-bold text-xl text-slate-900">
                  Four-Year Psychology Self-Study Audit
                </h4>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-medium transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Audit</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xl font-bold font-mono text-slate-900">
                  {completedCourses.length} / {totalCoreCourses}
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase">Courses Done</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xl font-bold font-mono text-slate-900">
                  {completedReadings}
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase">Readings Done</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xl font-bold font-mono text-slate-900">
                  {completedAssignments}
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase">Assignments</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-xl font-bold font-mono text-slate-900">
                  {degreeState.notes.length}
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase">Research Notes</div>
              </div>
            </div>

            {/* Active Courses */}
            {inProgressCourses.length > 0 && (
              <div className="text-xs text-slate-600">
                <strong>Currently In-Progress Courses:</strong>{' '}
                {inProgressCourses.map(([cId]) => cId.toUpperCase()).join(', ')}
              </div>
            )}
          </div>

          {/* Data Backup & Restore Controls */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              Backup & Sync Options
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleExport}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition-all shadow-2xs"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Export Progress (JSON)</span>
              </button>

              <button
                onClick={() => setShowImportBox(!showImportBox)}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition-all shadow-2xs"
              >
                <Upload className="w-4 h-4 text-amber-600" />
                <span>Import Progress (JSON)</span>
              </button>
            </div>

            {/* Import Textarea Dropdown */}
            {showImportBox && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in duration-150">
                <label className="text-xs font-semibold text-slate-700 block">
                  Paste exported JSON data below:
                </label>
                <textarea
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  rows={6}
                  placeholder='{"courseProgress": { ... }, "notes": [ ... ]}'
                  className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-mono bg-white"
                />
                {importError && (
                  <div className="text-xs text-rose-600 font-semibold">{importError}</div>
                )}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowImportBox(false)}
                    className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleImportSubmit}
                    className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold"
                  >
                    Load State
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Reset State Option */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Need a fresh start?</span>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-rose-600 hover:text-rose-800 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Degree Progress</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
