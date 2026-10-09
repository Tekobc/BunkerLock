/**
 * BunkerLock Synthesized Mechanical Audio Engine
 * Genera efectos sonoros mecánicos industriales ultra-realistas
 * utilizando la Web Audio API nativa sin latencia ni dependencias externas.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
}

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playTactileClick();
  }
  return soundEnabled;
}

/** Clic táctil de interruptor industrial metálico */
export function playTactileClick(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(1400, now);
  osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.04);
}

/** Desplazamiento de cerrojos de acero templado (Bolt Slide) */
export function playBoltSlide(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Ruido de fricción metálica
  const bufferSize = ctx.sampleRate * 0.22;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(800, now);
  filter.frequency.linearRampToValueAtTime(2200, now + 0.12);
  filter.frequency.linearRampToValueAtTime(600, now + 0.22);
  filter.Q.value = 4.5;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.01, now);
  noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.08);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  // Golpe sordo de enganche (Impacto de cerrojo)
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(220, now + 0.16);
  osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

  oscGain.gain.setValueAtTime(0.35, now + 0.16);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + 0.22);
  osc.start(now + 0.16);
  osc.stop(now + 0.35);
}

/** Golpe pesado de puerta acorazada sellando (Heavy Vault Latch) */
export function playHeavyLatch(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Golpe grave de tonelaje
  const subOsc = ctx.createOscillator();
  const subGain = ctx.createGain();
  subOsc.type = "sine";
  subOsc.frequency.setValueAtTime(140, now);
  subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.4);

  subGain.gain.setValueAtTime(0.5, now);
  subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  subOsc.connect(subGain);
  subGain.connect(ctx.destination);

  // Resonancia metálica
  const metalOsc = ctx.createOscillator();
  const metalGain = ctx.createGain();
  metalOsc.type = "triangle";
  metalOsc.frequency.setValueAtTime(480, now);
  metalOsc.frequency.exponentialRampToValueAtTime(90, now + 0.25);

  metalGain.gain.setValueAtTime(0.2, now);
  metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

  metalOsc.connect(metalGain);
  metalGain.connect(ctx.destination);

  subOsc.start(now);
  subOsc.stop(now + 0.4);
  metalOsc.start(now);
  metalOsc.stop(now + 0.25);
}

/** Confirmación de lectura biométrica o teclado criptográfico */
export function playBiometricScan(granted: boolean = true): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  if (granted) {
    // Doble tono agudo armónico
    [880, 1320].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.18, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.12);
    });
  } else {
    // Tono grave de error
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(150, now);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }
}

/** Liberación neumática / despresurización de cámara */
export function playHydraulicRelease(): void {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const bufferSize = ctx.sampleRate * 0.4;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1800, now);
  filter.frequency.exponentialRampToValueAtTime(280, now + 0.38);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + 0.4);
}
