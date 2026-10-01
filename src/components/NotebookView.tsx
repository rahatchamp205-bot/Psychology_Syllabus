import React, { useState } from 'react';
import {
  NotebookPen,
  Plus,
  Trash2,
  Download,
  Search,
  BookOpen,
  Calendar,
  FileText,
  Eye,
  Edit3
} from 'lucide-react';
import { UserNote, UserDegreeState } from '../types';
import { MASTER_COURSES } from '../data/courses';

interface NotebookViewProps {
  degreeState: UserDegreeState;
  onUpdateNotes: (notes: UserNote[]) => void;
}

export const NotebookView: React.FC<NotebookViewProps> = ({
  degreeState,
  onUpdateNotes
}) => {
  const [notes, setNotes] = useState<UserNote[]>(degreeState.notes || []);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(
    notes[0]?.id || null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const selectedNote = notes.find((n) => n.id === selectedNoteId) || notes[0];

  const handleCreateNote = () => {
    const newNote: UserNote = {
      id: `note-${Date.now()}`,
      title: 'Untitled Empirical Synthesis',
      content:
        '# Theoretical Question & Hypothesis\n\n* Core psychological constructs:\n* Operational definitions & measurement paradigm:\n* Primary empirical literature citations:\n* Methodological critiques & replication constraints:\n',
      courseCode: 'PSY 101',
      updatedAt: new Date().toISOString()
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    setSelectedNoteId(newNote.id);
    onUpdateNotes(updated);
  };

  const handleUpdateCurrentNote = (field: keyof UserNote, value: any) => {
    if (!selectedNote) return;
    const updated = notes.map((n) =>
      n.id === selectedNote.id
        ? { ...n, [field]: value, updatedAt: new Date().toISOString() }
        : n
    );
    setNotes(updated);
    onUpdateNotes(updated);
  };

  const handleDeleteCurrentNote = () => {
    if (!selectedNote) return;
    if (confirm('Are you sure you want to archive and delete this research note?')) {
      const updated = notes.filter((n) => n.id !== selectedNote.id);
      setNotes(updated);
      setSelectedNoteId(updated[0]?.id || null);
      onUpdateNotes(updated);
    }
  };

  const handleExportMarkdown = () => {
    if (!selectedNote) return;
    const blob = new Blob([selectedNote.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedNote.title.replace(/\s+/g, '-').toLowerCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredNotes = notes.filter((n) => {
    return (
      searchQuery.trim() === '' ||
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (n.courseCode && n.courseCode.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <section className="p-6 sm:p-8 bg-[#FAF9F6] border border-[#E5E2DC] border-t-3 border-t-[#A51C30] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-seal text-[10px] font-bold px-2 py-0.5 bg-[#A51C30] text-white uppercase tracking-widest">
            Scholarly Repository
          </span>
          <span className="text-[11px] font-seal text-[#78716C] uppercase tracking-wider">
            Personal Research Log & Course Syntheses
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-serif-scholarly text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
              Digital Study Notebook & Research Log
            </h1>
            <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-serif max-w-2xl mt-1">
              Document literature syntheses, theoretical critiques, empirical research designs, and thesis proposals with Markdown support.
            </p>
          </div>

          <button
            onClick={handleCreateNote}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#A51C30] hover:bg-[#8B1425] text-white text-xs font-semibold rounded-xs transition-all tracking-wide"
          >
            <Plus className="w-4 h-4" />
            <span>New Research Note</span>
          </button>
        </div>
      </section>

      {/* Notebook Editor / Viewer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Notes List */}
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E5E2DC] p-3 shadow-2xs space-y-3 max-h-[700px] overflow-y-auto">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes or course codes..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xs text-xs border border-[#E5E2DC] focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] bg-[#FAF9F6] text-[#1E1E1E]"
            />
          </div>

          {/* List */}
          <div className="space-y-1">
            {filteredNotes.map((note) => {
              const isSelected = selectedNote?.id === note.id;
              return (
                <button
                  key={note.id}
                  onClick={() => setSelectedNoteId(note.id)}
                  className={`w-full text-left p-3 rounded-xs transition-all border ${
                    isSelected
                      ? 'bg-[#FAF8F3] border-l-3 border-l-[#A51C30] border-t border-r border-b border-[#E5E2DC]'
                      : 'hover:bg-[#FAF9F6] border-l-3 border-l-transparent border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {note.courseCode && (
                      <span className="font-mono text-[10px] font-bold text-[#A51C30]">
                        {note.courseCode}
                      </span>
                    )}
                    <span className="text-[10px] text-[#78716C] font-mono">
                      {new Date(note.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-serif-scholarly font-bold text-xs text-[#1E1E1E] truncate">
                    {note.title || 'Untitled Note'}
                  </h4>
                  <p className="text-[11px] text-[#78716C] line-clamp-2 mt-0.5 font-serif">
                    {note.content.slice(0, 100).replace(/[#*`_]/g, '')}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Note Editor / Preview */}
        <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#E5E2DC] p-6 shadow-2xs space-y-4">
          {selectedNote ? (
            <div className="space-y-4">
              {/* Note Metadata Bar */}
              <div className="flex items-center justify-between gap-3 flex-wrap border-b border-[#E5E2DC] pb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <select
                    value={selectedNote.courseCode || 'PSY 101'}
                    onChange={(e) => handleUpdateCurrentNote('courseCode', e.target.value)}
                    className="text-xs font-mono font-bold px-2 py-1 rounded-xs bg-[#FAF9F6] border border-[#E5E2DC] text-[#1E1E1E]"
                  >
                    {MASTER_COURSES.map((c) => (
                      <option key={c.id} value={c.code}>
                        {c.code} - {c.title}
                      </option>
                    ))}
                  </select>

                  <span className="text-xs text-[#78716C] font-serif italic">
                    Updated: {new Date(selectedNote.updatedAt).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewMode(!previewMode)}
                    className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xs border transition-all ${
                      previewMode
                        ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                        : 'bg-[#FAF9F6] text-[#57534E] border-[#E5E2DC] hover:bg-[#FAF8F3]'
                    }`}
                  >
                    {previewMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{previewMode ? 'Edit' : 'Preview'}</span>
                  </button>

                  <button
                    onClick={handleExportMarkdown}
                    className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xs border border-[#E5E2DC] text-[#57534E] hover:bg-[#FAF9F6] transition-colors"
                    title="Export note as Markdown dossier"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export</span>
                  </button>

                  <button
                    onClick={handleDeleteCurrentNote}
                    className="p-1.5 rounded-xs text-[#A51C30] hover:bg-[#FAF8F3] transition-colors"
                    title="Delete Note"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title input */}
              <input
                type="text"
                value={selectedNote.title}
                onChange={(e) => handleUpdateCurrentNote('title', e.target.value)}
                placeholder="Note Title..."
                className="w-full font-serif-scholarly font-bold text-xl sm:text-2xl text-[#1E1E1E] border-b border-transparent focus:border-[#A51C30] focus:outline-hidden pb-1 bg-transparent"
              />

              {/* Editor or Preview */}
              {!previewMode ? (
                <textarea
                  value={selectedNote.content}
                  onChange={(e) => handleUpdateCurrentNote('content', e.target.value)}
                  rows={16}
                  placeholder="Write in Markdown (# Heading, * bullet points, **bold**)..."
                  className="w-full p-4 rounded-xs border border-[#E5E2DC] focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] text-xs sm:text-sm font-mono leading-relaxed text-[#1E1E1E] bg-[#FAF9F6] resize-y"
                />
              ) : (
                <div className="p-6 rounded-xs bg-[#FAF8F3] border border-[#E5E2DC] min-h-[350px] text-xs sm:text-sm text-[#33302E] leading-relaxed whitespace-pre-wrap font-serif">
                  {selectedNote.content}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-[#78716C] text-xs font-serif">
              No note selected. Click "New Research Note" to begin an empirical synthesis.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
